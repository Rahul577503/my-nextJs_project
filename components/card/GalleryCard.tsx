import Link from 'next/link'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button, { ButtonProps } from '@mui/material/Button'
import { Avatar, CardActions, Stack } from '@mui/material'

type Props = {
  title: string
  subtitle?: string
  link?: string
  image?: string
  avatar?: string
  description?: string
  viewlink?: string
  backgroundColor?: string
  sliderType?: string
  elipsis?: boolean
  buttons?: ButtonProp[]
}

type ButtonProp = ButtonProps & {
  title: string
  link?: string
  color?: string
  variant?: string
  direction?: string
  icon?: JSX.Element
}

const ellipsisCss = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  padding: '16px 16px 5px',
  marginBottom: '11px',
}

export default function GalleryCard(props: Props) {
  // const theme = useTheme()

  const cardHeaderTitle = {
    fontFamily: 'Roboto Slab',
    fontWeight: '500',
    fontSize: '1.2rem',
  }
  if(props.elipsis){
    Object.assign(cardHeaderTitle, ellipsisCss)
  }
  if(props.link !== undefined && props.link !== 'undefined'){
    Object.assign(cardHeaderTitle, {
      // backgroundColor: theme.palette.primary.main,
      // color: '#fff',
    })
  } else if(!props?.avatar){
    Object.assign(cardHeaderTitle, {
      // backgroundColor: theme.palette.primary.main,
      // color: '#fff',
    })
  }

  return (
    <Card elevation={3}>
      {props.sliderType === 'banner' ? (
        <></>
      ) : props.link !== undefined &&
        props.link !== 'undefined' &&
        props.title ? (
        <Link href={props.link || 'javascript:;'}>
          <CardHeader
            sx={cardHeaderTitle}
            titleTypographyProps={{ variant: 'inherit' }}
            title={props.title}
            subheader={props?.subtitle}
          />
        </Link>
      ) : (
        <CardHeader
          avatar={
            props?.avatar ? (
              <Avatar
                alt="img"
                src={props.avatar}
                sx={{ bgcolor: 'red' }}
                aria-label="avatar"
              >
                {props.avatar ? null : props.title.substr(0, 1)}
              </Avatar>
            ) : null
          }
          sx={cardHeaderTitle}
          titleTypographyProps={{ variant: 'inherit' }}
          subheaderTypographyProps={{
            fontSize: '0.75rem',
            color: props?.avatar ? '#333' : '#eee',
          }}
          title={props.title}
          subheader={props?.subtitle}
        />
      )}

      {props.image && (
        <CardMedia
          sx={{
            height: 0,
            paddingTop: '56.25%', // 16:9
            transition: 'all .5s',
            '&:hover': {
              transform: 'scale(1.2)',
            },
          }}
          style={
            props.sliderType === 'clients' ? { backgroundSize: 'contain' } : {}
          }
          image={props.image}
        />
      )}

      {props.description && (
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      )}

      {props?.buttons && props?.buttons?.length > 0 && (
        <CardActions>
          <Stack direction="row" justifyContent="space-between" width="100%">
            {props?.buttons?.map((button, index) => {
              return (
                <Button
                  size="small"
                  key={index}
                  color={button?.color || 'primary'}
                  variant={button.variant || 'contained'}
                  component={Link}
                  href={button.link}
                >
                  {button?.icon} &nbsp; {button?.title}
                </Button>
              )
            })}
          </Stack>
        </CardActions>
      )}
    </Card>
  )
}
