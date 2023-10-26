import {Dialog} from "../../components/dialog/Dialog";
import {TextInput} from "../../components/form/input-text/TextInput";
import {Button} from "../../components/button/Button";
import {Container} from "../../components/container/Container";

export const dialog = new Dialog('update-product-dialog')
const container = new Container('dialog-container')
const textInput = new TextInput('edit-product-text-input')
const submitBtn = new Button('submit-updated-product')
container.setChildren([
  textInput,
  submitBtn
])
dialog.contentInjection.smartphone.setContent(container)
