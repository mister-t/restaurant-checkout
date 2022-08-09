## Restaurant Checkout App

[Live Demo](https://mashginapp.herokuapp.com/)

- [x] See menu items fetched from the [Web API](https://github.com/mister-t/restaurant-checkout/blob/main/backend/models/itemModel.js#L4)
- [x] See ALL items
- [x] See items by categories
- [x] Add items multiple times to the local cart. An item could be added by clicking/tapping on the item multiple times or from within the cart
- [x] Remove items multiple times from the local cart.
- [x] Ability to clear the cart
- [x] Fill a payment form
- [x] Validation credit card information to help the user enter correct data
- [x] Submit the order (items, qty of each item, payment info, and total amount) to the [Web API](https://github.com/mister-t/restaurant-checkout/blob/5e75570bc9749f8053882756a7f560f30cc89c34/backend/models/orderModel.js#L12)
- [x] A Thank-you page will be shown if the order is submitted successfully
- [x] Mobile first development so it is responsive from desktop, tablets, to mobile phones
- [ ] Proposed: a previous orders page
- [ ] Add testing

### Running locally

- Create a .env file in the [top level folder](https://github.com/mister-t/restaurant-checkout)
- Add **NODE_ENV=development**
- Add **PORT=5000**, or whichever port is the most appropriate on your machine
- Add **MONGODB_URI=XYZ**, where **XYZ** is the connection URL to your DB host, such as [MongoDB](https://www.mongodb.com/)
- Run **npm install**
- **Go grab coffee or favorite drink**
- Run **npm run data:import** to populate the seed data for the online MongoDB
- Run **npm run dev** to start both the server and client
- If the last step was successful, the client app should open automatically to [http://localhost:3000](http://localhost:3000)

![Menu Categories](https://user-images.githubusercontent.com/1483458/183540607-33b9fd7a-da59-41c8-a742-e4366b2fb4c0.png)

![Entree Category](https://user-images.githubusercontent.com/1483458/183541798-e47438cc-0554-482d-b339-5af891ac96a2.png)

![Order Cart](https://user-images.githubusercontent.com/1483458/183541278-c79d086e-30a5-43b0-9410-4d79d13e68b0.png)

![Payment Form](https://user-images.githubusercontent.com/1483458/183541401-8e25810c-0ed3-40cf-94a0-1468214c5e40.png)

![Form Validations](https://user-images.githubusercontent.com/1483458/183541454-412f2ff4-5e46-4b2a-8603-29b1aa77ac07.png)

![Thank You](https://user-images.githubusercontent.com/1483458/183542036-e0158d3f-8e17-4ff5-8934-7aec5f882569.png)

![Canceling order](https://user-images.githubusercontent.com/1483458/183541360-b9c6c633-ad04-4e6e-9304-176aa5fc3731.png)
