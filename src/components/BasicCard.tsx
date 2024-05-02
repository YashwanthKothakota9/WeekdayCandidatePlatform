import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import RecommendIcon from '@mui/icons-material/Recommend';
import { grey } from '@mui/material/colors';

const BasicCard = () => {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 5,
      }}
    >
      <CardContent>
        <Box sx={{ mt: 1, display: 'flex', gap: 2 }}>
          <Box sx={{ backgroundColor: grey[200], p: 2, borderRadius: 5 }}>
            <RecommendIcon sx={{ width: 35, height: 35 }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h6">Role</Typography>
            <Typography variant="overline" display="block">
              Location
            </Typography>
          </Box>
        </Box>

        <Typography sx={{ mt: 2, fontWeight: 'bold' }} fontSize={14}>
          Estimated Salary:$
        </Typography>
        <Typography sx={{ mt: 2 }} variant="h6">
          About Company:{' '}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="body2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          nesciunt cumque dignissimos sint sapiente officiis adipisci impedit a
          corporis. Iure illum neque quis assumenda molestiae.
        </Typography>
        <Typography sx={{ mt: 2 }} variant="caption" display="block">
          Minimum Experience:{' '}
        </Typography>
        <Button
          sx={{
            mt: 2,
            width: '100%',
            backgroundColor: '#000',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)',
            },
          }}
          variant="contained"
          href=""
        >
          Easy Apply
        </Button>
        <Button
          sx={{
            mt: 2,
            width: '100%',
            backgroundColor: '#000',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)',
            },
          }}
          variant="contained"
          href=""
        >
          Unlock Referral asks
        </Button>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
