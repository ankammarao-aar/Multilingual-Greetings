import {ListItem, Button} from './styledComponents'

const LanguageTab = props => {
  const {tabDetails, changeActiveTab, isActive} = props
  const {buttonText, id} = tabDetails

  const onClickTab = () => {
    changeActiveTab(id)
  }

  return (
    <ListItem>
      <Button type="button" onClick={onClickTab} bgColor={isActive}>
        {buttonText}
      </Button>
    </ListItem>
  )
}

export default LanguageTab
