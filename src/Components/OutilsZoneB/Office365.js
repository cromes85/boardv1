import React from "react";

function Office365(props) {
  function handleClick(event) {
    event.preventDefault();
    const link = event.target.href;
    window.open(link, "_blank", "location=no,toolbar=no");
    props.onButtonClick(event.target.textContent + "\n");
  }

  return (
    <div class="py-6 inline-grid grid-cols-3 gap-4 justify-content flex-wrap">
      <a
              
              href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/licenses"
              target="_blank"
              
              onClick={handleClick}
            >
              <span class="h-10 w-16 my-2  p-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2.5 border border-blue-700 rounded hover:ring-2 ring-blue-500 shadow-2xl">Licences</span>
            </a>
            <a
              href="https://admin.exchange.microsoft.com/#/messagetrace"
              target="_blank"
              
              onClick={handleClick}
            >
              <span class="h-10 w-16 my-2  p-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2.5 border border-blue-700 rounded hover:ring-2 ring-blue-500 shadow-2xl">Tracking</span>
            </a>

            <a
              href="https://admin.exchange.microsoft.com/#/mailboxes"
              target="_blank"
              
              onClick={handleClick}
            >
              <span class="h-10 w-16 my-2  p-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2.5 border border-blue-700 rounded hover:ring-2 ring-blue-500 shadow-2xl">Exchange</span>
            </a>

            <a
              href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users"
              target="_blank"
              class=""
              onClick={handleClick}
            >
              <span class="h-10 w-16 my-2  p-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2.5 border border-blue-700 rounded hover:ring-2 ring-blue-500 shadow-2xl">Users</span>
            </a>

            <a
              href=""
              target="_blank"
              class=""
              onClick={handleClick}
            >
              <span class="h-10 w-16 my-2  p-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2.5 border border-blue-700 rounded hover:ring-2 ring-blue-500 shadow-2xl">Quarantaine</span>
            </a>

            <a
              href="https://admin.microsoft.com/Adminportal/Home?invType=IndirectResellerRelationship&partnerId=70831ff1-16f0-4aeb-a0e3-456aeeb5c0ec&msppId=601089&DAP=true#/BillingAccounts/partner-invitation"
              target="_blank"
              class=""
              onClick={handleClick}
            >
              <span class="h-10 w-16 my-2  p-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2.5 border border-blue-700 rounded hover:ring-4 ring-blue-500 shadow-2xl">Ingram1</span>
            </a>

            <a
              href="https://admin.microsoft.com/Adminportal/Home?invType=IndirectResellerRelationship&partnerId=70831ff1-16f0-4aeb-a0e3-456aeeb5c0ec&msppId=601089&DAP=true&indirectCSPId=abd71061-286d-497f-bb59-9f07d2e5c8a7#/BillingAccounts/partner-invitationhttps://admin.microsoft.com/Adminportal/Home?invType=IndirectResellerRelationship&partnerId=70831ff1-16f0-4aeb-a0e3-456aeeb5c0ec&msppId=601089&DAP=true&indirectCSPId=abd71061-286d-497f-bb59-9f07d2e5c8a7#/BillingAccounts/partner-invitation"
              target="_blank"
              class=""
              onClick={handleClick}
            >
              <span class="h-10 w-16 my-2  p-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2.5 border border-blue-700 rounded hover:ring-2 ring-blue-500 shadow-2xl">Ingram2</span>
            </a>
      
    </div>
  );
}

export default Office365;
