import postData from './postData';
import getData from './getData';

const refs = {
    list: document.querySelector('.list'),
};

const updateUsersList = users => {
    const makeMarkup = ({ name, number }) => {
        return `
      <li class="item">
        <p>Name: ${name}</p>
        <p>Number: ${number}</p>
      </li>
  `;
    };

    insertHtml(users, makeMarkup);
};

const insertHtml = (users, func) => {
    const makeEachItemMarkup = users.map(func).join('');
    refs.list.insertAdjacentHTML('beforeend', makeEachItemMarkup);
};

getData().then(users => updateUsersList(users));

postData().then(user => updateUsersList(user));

/**
 * - Доделать по пост запросу отрисовку на клиенте
 */