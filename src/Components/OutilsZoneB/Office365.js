import React from "react";

function Office365(props) {
  function handleClick(event) {
    event.preventDefault();
    const link = event.target.href;
    window.open(link, "_blank", "location=no,toolbar=no");
    props.onButtonClick(event.target.textContent + "\n");
  }

  return (
    <div class="h-56 grid grid-cols-3 gap-4 content-center justify-items-center">
      <a
              
              href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/licenses"
              
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Licences</span>
              
            </a>
            <a
              href="https://admin.exchange.microsoft.com/#/messagetrace"
              
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Tracking</span>
              
            </a>

            <a
              href="https://admin.exchange.microsoft.com/#/mailboxes"
              
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Exchange</span>
            </a>

            <a
              href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Users</span>
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Quarantaine</span>
            </a>

            <a
              href="https://admin.microsoft.com/Adminportal/Home?invType=IndirectResellerRelationship&partnerId=70831ff1-16f0-4aeb-a0e3-456aeeb5c0ec&msppId=601089&DAP=true#/BillingAccounts/partner-invitation"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Ingram1</span>
            </a>

            <a
              href="https://admin.microsoft.com/Adminportal/Home?invType=IndirectResellerRelationship&partnerId=70831ff1-16f0-4aeb-a0e3-456aeeb5c0ec&msppId=601089&DAP=true&indirectCSPId=abd71061-286d-497f-bb59-9f07d2e5c8a7#/BillingAccounts/partner-invitationhttps://admin.microsoft.com/Adminportal/Home?invType=IndirectResellerRelationship&partnerId=70831ff1-16f0-4aeb-a0e3-456aeeb5c0ec&msppId=601089&DAP=true&indirectCSPId=abd71061-286d-497f-bb59-9f07d2e5c8a7#/BillingAccounts/partner-invitation"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Ingram2</span>
            </a>
      
    </div>
  );
}

export default Office365;
