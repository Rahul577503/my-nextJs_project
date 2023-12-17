import { forwardRef, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import TelegramIcon from '@mui/icons-material/Telegram'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'
import Slide, { SlideProps } from '@mui/material/Slide'
import { SubmitHandler, useForm } from 'react-hook-form'

import SubHeading from '@/components/wrappers/headings/SubHeading'
import useLocalStorage from '@/hooks/useLocalStorage'

interface IFormInputs {
  firstName: string
  lastName: string
  email: string
  mobile: string
  message?: string
  qualification?: string
  institute?: string
  courses?: string[]
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

type IMessage = {
  type: AlertColor
  text: string
}

export default function Enquiry({
  spacing,
  width,
  align,
  onSubmit,
}: {
  spacing: number
  width?: string
  align?: string
  onSubmit?: () => void
}): JSX.Element {
  const router = useRouter()
  const queryString = router.query
  const [message, setMessage] = useState<IMessage>({
    type: 'error',
    text: '',
  })
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)
  const [, setUser] = useLocalStorage('enquiryUser', {})
  const [isProcessing, setIsProcessing] = useState(false)

  const handleClose = () => {
    setOpenSnackbar(false)
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<IFormInputs>({
    mode: 'onBlur',
  })

  const handleSubmitFun: SubmitHandler<IFormInputs> = async (data) => {
    if (isProcessing) return
    setIsProcessing(true)

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      const resJson = await res.json()
      if (resJson.status === 200) {
        reset()
        setMessage({
          type: 'success',
          text: 'Enquiry has been sent successfully!',
        })
        setUser(data)
        setOpenSnackbar(true)
        if (
          queryString &&
          queryString?.service !== undefined &&
          queryString?.service !== ''
        ) {
          setTimeout(() => router.push('/services'), 3000)
        }
        setIsProcessing(false)
        if (onSubmit) {
          setTimeout(() => {
            onSubmit()
          }, 3500)
        }
      } else {
        setMessage({
          type: 'error',
          text: resJson?.message || 'Some error has occured',
        })
        setOpenSnackbar(true)
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        flexFlow: 'column wrap',
        width: width ?? '90%',
        float: align ?? 'right',
      }}
    >
      <SubHeading
        align={align === 'center' ? 'center' : 'left'}
        style={{ marginTop: 2 }}
      >
        {queryString && (queryString.course || queryString.service) ? (
          <>SEND ENQUIRY</>
        ) : (
          <>WRITE TO US</>
        )}
      </SubHeading>

      <Snackbar
        open={openSnackbar}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        autoHideDuration={6000}
        message=""
      >
        <Alert
          onClose={handleClose}
          severity={message.type}
          sx={{ width: '100%' }}
        >
          {message.text}
        </Alert>
      </Snackbar>

      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(handleSubmitFun)}
      >
        <Grid container spacing={spacing ?? 4}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="First Name"
              defaultValue=""
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              {...register('firstName', {
                required: {
                  value: true,
                  message: 'required field!',
                },
                pattern: {
                  value:
                    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/,
                  message: 'incorrect format!',
                },
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Last Name"
              defaultValue=""
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              {...register('lastName', {
                required: {
                  value: true,
                  message: 'required field!',
                },
                pattern: {
                  value:
                    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/,
                  message: 'incorrect format!',
                },
              })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Mobile"
              defaultValue=""
              variant="outlined"
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
              {...register('mobile', {
                required: {
                  value: true,
                  message: 'required field!',
                },
                pattern: {
                  value: /^[6789]\d{9}$/,
                  message: 'incorrect format!',
                },
              })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Email"
              defaultValue=""
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register('email', {
                required: {
                  value: true,
                  message: 'required field!',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'incorrect format!',
                },
              })}
            />
          </Grid>
          {queryString &&
          queryString?.course !== undefined &&
          queryString?.course !== '' ? (
            <>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Qualification"
                  defaultValue=""
                  variant="outlined"
                  error={!!errors.qualification}
                  helperText={errors.qualification?.message}
                  {...register('qualification', {
                    required: {
                      value: true,
                      message: 'required field!',
                    },
                    pattern: {
                      value:
                        /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                      message: 'incorrect format!',
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name of institute (MDS degree)"
                  defaultValue=""
                  variant="outlined"
                  error={!!errors.institute}
                  helperText={errors.institute?.message}
                  {...register('institute', {
                    required: {
                      value: true,
                      message: 'required field!',
                    },
                    pattern: {
                      value:
                        /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                      message: 'incorrect format!',
                    },
                  })}
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  minRows={5}
                  maxRows={5}
                  label="Message"
                  defaultValue=""
                  variant="outlined"
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  {...register('message', {
                    required: {
                      value: true,
                      message: 'required field!',
                    },
                  })}
                />
              </Grid>
            </>
          )}
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disabled={isProcessing}
              endIcon={<TelegramIcon />}
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
