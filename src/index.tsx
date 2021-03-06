import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import ReduxApp from './ReactExamples/redux';
import TabsExample from './components/Pixools/Tabs/TabsExample';
import Home from './routes/Home'
import NotFound from './routes/NotFound'
import Invoices from './ReactExamples/reactRouter/Invoices'
import Invoice from './ReactExamples/reactRouter/Invoice'
import Users from './ReactExamples/redux/features/users'
import User from './ReactExamples/redux/features/users/User'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/tabs" element={<TabsExample />} />
          <Route path="/invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="/users">
            <Route path="all" element={<Users />} />
            <Route path=":userId" element={<User />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
