import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface PageHeaderProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <Stack spacing={1}>
      {eyebrow ? (
        <Typography variant="overline" color="primary">
          {eyebrow}
        </Typography>
      ) : null}
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
        {description}
      </Typography>
    </Stack>
  );
}
