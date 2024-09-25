import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Card } from '@totalsoft/rocket-ui'
import { useTranslation } from 'react-i18next'

const Notes = () => {
  const { t } = useTranslation()

  return (
    <Box mt={2}>
      <Grid container justifyContent='center' alignItems='center' alignContent='center' direction='column' spacing={2}>
        <Grid item container justifyContent='center' alignItems='center' alignContent='center' direction='column' spacing={1} xs={10}>
          <Grid item xs={10} md={10} lg={10}>
            <Card xs={10} md={10} lg={10}>
              <Typography variant='body1' align='center'>
                {t('Notes.InfoCard1')}
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Grid item container justifyContent='center' alignItems='center' alignContent='center' direction='column' spacing={1} xs={10}>
          <Grid item xs={10} md={10} lg={10}>
            <Card xs={10} md={10} lg={10}>
              <Typography variant='body1' align='center'>
                {t('Notes.InfoCard2')}
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Grid item container justifyContent='center' alignItems='center' alignContent='center' direction='column' spacing={1} xs={10}>
          <Grid item xs={10} md={10} lg={10}>
            <Card xs={10} md={10} lg={10}>
              <Typography variant='body1' align='center'>
                {t('Notes.InfoCard3')}
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Grid item container justifyContent='center' alignItems='center' alignContent='center' direction='column' spacing={1} xs={10}>
          <Grid item xs={10} md={10} lg={10}>
            <Card xs={10} md={10} lg={10}>
              <Typography variant='body1' align='center'>
                {t('Notes.InfoCard4')}
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Grid item container justifyContent='center' alignItems='center' alignContent='center' direction='column' spacing={1}>
          <Grid item xs={10} md={10} lg={10}>
            <Card xs={10} md={10} lg={10}>
              <Typography variant='body1' align='center'>
                {t('Notes.InfoCard5')}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Notes
