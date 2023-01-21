import React from "react";

function Office365(props) {
  function handleClick(event) {
    event.preventDefault();
    const link = event.target.href;
    window.open(link, "_blank", "location=no,toolbar=no");
    props.onButtonClick(event.target.textContent + "\n");
  }

  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 content-center justify-items-center">
      <a
        class="block lg:grid col-span-12"
        href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/licenses"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Licences
        </span>
      </a>
      <a
        class="block lg:grid col-span-12"
        href="https://admin.exchange.microsoft.com/#/messagetrace"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded--lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Tracking
        </span>
      </a>
      <a
        class="block lg:grid col-span-12"
        href="https://admin.exchange.microsoft.com/#/mailboxes"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Exchange
        </span>
      </a>
      <a target="_blank" href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" rel="noopener noreferrer" onClick={handleClick}>
        <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Users
        </span>
      </a>
    </div>
  );
}

export default Office365;
