import {Dialog} from "../../components/dialog/Dialog";
import {TextInput} from "../../components/form/input-text/TextInput";
import {Button} from "../../components/button/Button";
import {Container} from "../../components/container/Container";

export const dialog = new Dialog('update-product-dialog')
dialog.visibility.smartphone.setVisible(false)
const container = new Container('dialog-container')
const textInput = new TextInput('edit-product-text-input')
const priceInput = new NumberInput('edit-product-number-input')
const submitBtn = new Button('submit-updated-product')
submitBtn.structural.smartphone.setLabel('aanpassen')
container.setChildren([
  textInput,
  priceInput,
  submitBtn
])
dialog.contentInjection.smartphone.setContent(container)
