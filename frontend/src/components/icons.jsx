import {
  Heart, Award, Users, Waves, ShieldCheck, Compass, Fish, MessageCircle, MapPin, Star, Calendar,
} from "lucide-react";

export const iconMap = {
  Heart, Award, Users, Waves, ShieldCheck, Compass, Fish, MessageCircle, MapPin, Star, Calendar,
};

export const WaIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" className={`${className} fill-current`} aria-hidden="true">
    <path d="M16.003 3C9.38 3 4 8.38 4 15c0 2.117.553 4.106 1.523 5.84L4 29l8.36-1.49A11.93 11.93 0 0 0 16.003 27C22.62 27 28 21.62 28 15S22.62 3 16.003 3zm5.27 13.42c-.29-.14-1.71-.84-1.97-.94-.26-.1-.45-.14-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.14.19 2.01 3.07 4.87 4.31.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33z" />
  </svg>
);
