import {Dialog} from "../../components/dialog/Dialog";
import {TextInput} from "../../components/form/input-text/TextInput";
import {Button} from "../../components/button/Button";
import {Container} from "../../components/container/Container";
import {NumberInput} from "../../components/form/input-number/NumberInput";
import {Form} from "../../components/form/Form";
import {Multiselect} from "../../components/form/multiselect/Multiselect";

export const dialog = new Dialog('update-product-dialog')
dialog.visibility.smartphone.setVisible(false)
const container = new Container('dialog-container')
const textInput = new TextInput('edit-product-text-input')
const priceInput = new NumberInput('edit-product-number-input')
const specificationsControl = new Multiselect('edit-product-multiselect')
specificationsControl.dataRepresentation.smartphone.setOptionLabel()
const submitBtn = new Button('submit-updated-product')
submitBtn.structural.smartphone.setLabel('aanpassen')
container.setChildren([
  textInput,
  priceInput,
  specificationsControl,
  submitBtn
])
const form = new Form('update-product-form')
form.contentInjection.smartphone.setContent(container)
dialog.contentInjection.smartphone.setContent(form)
