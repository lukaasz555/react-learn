import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'views/Root';
import { worker } from 'mocks/browser';

<<<<<<< Updated upstream
worker.start();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
=======
// firefox issue (fixed)
worker.start().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
>>>>>>> Stashed changes
