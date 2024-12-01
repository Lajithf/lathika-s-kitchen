import { montserrat } from '@/app/page';
import { Typography } from '@mui/material';
import { Pacifico } from 'next/font/google';
export const pacifico = Pacifico({
  subsets: ['latin'],
  variable: '--font-pacifico',
  weight: '400',
});

export default function AboutUs() {
  return (
    <div className="container mt-24 m-auto text-center">
      <Typography variant="h3" style={pacifico.style}>
        Welcome!
      </Typography>
      TO
      <Typography
        variant="h4"
        className={'hidden sm:block'}
        style={montserrat.style}
      >
        OUR KiTCHEN
      </Typography>
      <Typography className="pt-4" variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
    </div>
  );
}
