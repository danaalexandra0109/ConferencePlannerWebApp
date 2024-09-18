import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <Grid container justifyContent='center' alignItems='center' alignContent='center' direction='column' spacing={10}>
      {/* Title Section with Spacing */}
      <Grid item xs={4} sx={{ marginTop: '40px' }}>
        <Typography variant='h5'>{t('About.AboutMe')}</Typography>
      </Grid>

      {/* Message Section */}
      <Grid item container justifyContent='center' alignItems='center' alignContent='center' direction='column' spacing={1}>
        <Grid item xs={12}>
          <Typography variant='body1' align='center'>
            {t('About.Message')}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default About
