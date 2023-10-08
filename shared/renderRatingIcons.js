import { FontAwesome } from '@expo/vector-icons';

export const renderRatingIcons = (rating) => {
    const icons = [];
    for (let i = 0; i < rating; i++) {
      icons.push(
        <FontAwesome
          name="heart"
          size={24}
          color="red"
          key={`heart-${i}`}
        />
      );
    }
    return icons;
  };
  