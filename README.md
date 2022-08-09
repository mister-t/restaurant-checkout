## Restaurant Checkout App

[Live Demo](https://mashginapp.herokuapp.com/)
![Menu Categories](https://user-images.githubusercontent.com/1483458/183540607-33b9fd7a-da59-41c8-a742-e4366b2fb4c0.png)

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
