
import { NextRequest, NextResponse } from 'next/server';

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  }

  if (!PEXELS_API_KEY) {
    console.error('Pexels API Key is missing in environment variables');
    return NextResponse.json({ error: 'Configuration error' }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=10&orientation=landscape`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.photos || data.photos.length === 0) {
      return NextResponse.json({ error: 'No photos found' }, { status: 404 });
    }

    // Pick the most relevant high-quality photo (usually the first one from Pexels)
    const photo = data.photos[0];
    
    return NextResponse.json({
      imageUrl: photo.src.large2x,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
      pexelsUrl: photo.url,
    });
  } catch (error) {
    console.error('Error fetching from Pexels:', error);
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }
}
