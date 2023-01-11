import React from "react";

function Office365(props) {
  function handleClick(event) {
    event.preventDefault();
    const link = event.target.href;
    window.open(link, "_blank", "location=no,toolbar=no");
    props.onButtonClick(event.target.textContent + "\n");
  }

  return (
    <div class=" bg-white border-gray-200 px-3 sm:px-4 py-3 rounded dark:bg-gray-900 border-b-4 hover:border-t-4 hover:border-b-0 ">
      <div class="container flex flex-wrap items-center justify-between mx-auto ">
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="space-y-2 flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <a
              
              href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/licenses"
              target="_blank"
              class="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={handleClick}
            >
              <span class="ml-3 hover:text-2xl md:underline md:decoration-blue-600 md:decoration-red-400">Licences</span>
            </a>
            <a
              href="https://admin.exchange.microsoft.com/#/messagetrace"
              target="_blank"
              class="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={handleClick}
            >
              <span class="ml-3 hover:text-2xl md:underline md:decoration-blue-600 md:decoration-red-400">Tracking</span>
            </a>

            <a
              href="https://admin.exchange.microsoft.com/#/mailboxes"
              target="_blank"
              class="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={handleClick}
            >
              <span class="ml-3 hover:text-2xl md:underline md:decoration-blue-600 md:decoration-red-400">Exchange</span>
            </a>

            <a
              href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users"
              target="_blank"
              class="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={handleClick}
            >
              <span class="ml-3 hover:text-2xl md:underline md:decoration-blue-600 md:decoration-red-400">Liste Users</span>
            </a>

            <a
              href=""
              target="_blank"
              class="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={handleClick}
            >
              <span class="ml-3 hover:text-2xl md:underline md:decoration-blue-600 md:decoration-red-400">Quarantaine</span>
            </a>

            <a
              href="https://admin.microsoft.com/Adminportal/Home?invType=IndirectResellerRelationship&partnerId=70831ff1-16f0-4aeb-a0e3-456aeeb5c0ec&msppId=601089&DAP=true#/BillingAccounts/partner-invitation"
              target="_blank"
              class="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={handleClick}
            >
              <span class="ml-3 hover:text-2xl md:underline md:decoration-blue-600 md:decoration-red-400">Link Ingram 1</span>
            </a>

            <a
              href="https://admin.microsoft.com/Adminportal/Home?invType=IndirectResellerRelationship&partnerId=70831ff1-16f0-4aeb-a0e3-456aeeb5c0ec&msppId=601089&DAP=true&indirectCSPId=abd71061-286d-497f-bb59-9f07d2e5c8a7#/BillingAccounts/partner-invitationhttps://admin.microsoft.com/Adminportal/Home?invType=IndirectResellerRelationship&partnerId=70831ff1-16f0-4aeb-a0e3-456aeeb5c0ec&msppId=601089&DAP=true&indirectCSPId=abd71061-286d-497f-bb59-9f07d2e5c8a7#/BillingAccounts/partner-invitation"
              target="_blank"
              class="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={handleClick}
            >
              <span class="ml-3 hover:text-2xl md:underline md:decoration-blue-600 md:decoration-red-400">Link Ingram 2</span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Office365;
