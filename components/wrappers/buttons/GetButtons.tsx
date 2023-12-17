import Link from 'next/link'
import Button, { ButtonProps } from '@mui/material/Button'
import TelegramIcon from '@mui/icons-material/Telegram'

type ButtonProp = ButtonProps & {
  title: string
  link?: string
}

type IButtons = {
  buttons: ButtonProp[]
}

const GetButtons = ({ buttons }: IButtons) => {
  return (
    <>
      {buttons?.map((button, index) => {
        return (
          <Button
            key={index}
            size="small"
            color={button?.color || 'primary'}
            variant={button.variant || 'contained'}
            component={Link}
            href={button.link}
            sx={{ marginRight: '5px' }}
          >
            <TelegramIcon /> &nbsp; {button?.title}
          </Button>
        )
      })}
    </>
  )
}
export default GetButtons
