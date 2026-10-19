import Alert from "@mui/material/Alert";

export function CatalogNotice() {
  return (
    <Alert severity="info" variant="outlined" role="status">
      Counts in this dashboard come from the demonstration navigation catalog.
      They are not live operational results and do not grant approval permission.
    </Alert>
  );
}
