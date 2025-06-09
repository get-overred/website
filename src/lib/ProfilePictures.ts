
import profile_picture from '$lib/assets/profile_picture.jpeg';
import fallback_profile from '$lib/assets/fallback_profile.webp';

interface ProfPics {
	[key: string]: string;
}

export const profile_pictures: ProfPics = {
	'Moritz K.': profile_picture,
	x: fallback_profile
};

