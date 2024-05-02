import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
} from '@mui/material';
import { useState } from 'react';

const MAX_LENGTH = 220; // Maximum number of characters to display initially

export function ExpandableText({ text }: { text: string }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Box sx={{ mt: 0.5 }}>
        <Typography variant="body2" sx={{ position: 'relative' }}>
          {text.slice(0, MAX_LENGTH) + '...'}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 20, // Adjust height as needed
              background:
                'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
            }}
          />
        </Typography>
      </Box>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle
          sx={{ fontWeight: 'bold', fontSize: '18', textAlign: 'center' }}
        >
          Job Description
        </DialogTitle>
        <DialogContent>{text}</DialogContent>
      </Dialog>
      {!openModal && text.length > MAX_LENGTH && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={handleOpenModal}
            size="small"
            sx={{
              fontSize: 12,
              color: '#2747e8',
            }}
          >
            View Job
          </Button>
        </Box>
      )}
    </div>
  );
}
