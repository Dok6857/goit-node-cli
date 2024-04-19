import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from './contacts.js';
import { program } from 'commander';
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      console.log(listContacts());
      break;

    case 'get':
      console.log(getContactById(id));
      break;

    case 'add':
      console.log(addContact(name, email, phone));
      break;

    case 'remove':
      console.log(removeContact(id));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(options);
