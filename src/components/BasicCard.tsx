import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import RecommendIcon from '@mui/icons-material/Recommend';
import { grey } from '@mui/material/colors';
import React from 'react';
import { ExpandableText } from './jobDetails';

interface BasicCardProps {
  role: string;
  location: string;
  details: string;
  link: string;
  minSalary: number | null;
  maxSalary: number | null;
  currency: string;
  minExp: number | null;
  maxExp: number | null;
}

const BasicCard: React.FC<BasicCardProps> = ({
  role,
  location,
  details,
  link,
  minSalary,
  maxSalary,
  currency,
  minExp,
  maxExp,
}) => {
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
            <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
              {role}
            </Typography>
            <Typography variant="overline" display="block">
              {location}
            </Typography>
          </Box>
        </Box>

        <Typography sx={{ mt: 2, color: grey[600] }} fontSize={14}>
          Estimated Salary in {currency} : {minSalary ?? maxSalary}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="h6">
          About Company:{' '}
        </Typography>
        {/* <Typography sx={{ mt: 2 }} variant="body2">
          {details}
        </Typography> */}
        <ExpandableText text={details} />
        <Typography
          sx={{ mt: 2, color: 'GrayText' }}
          variant="caption"
          display="block"
        >
          {/* Minimum Experience:{minExp ?? maxExp ?? 0} years */}
          {minExp ?? maxExp
            ? `Minimum Experience: ${minExp ?? maxExp ?? 0} years`
            : 'No experience required'}
        </Typography>
        <Button
          sx={{
            mt: 2,
            width: '100%',
            backgroundColor: '#54efc3',
            color: '#000',
            '&:hover': {
              backgroundColor: 'rgba(12, 120, 114, 0.7)',
            },
          }}
          variant="contained"
          href={link}
        >
          Easy Apply
        </Button>
        <Button
          sx={{
            mt: 2,
            width: '100%',
            backgroundColor: '#2747e8',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgba(37, 54, 142, 0.7)',
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
