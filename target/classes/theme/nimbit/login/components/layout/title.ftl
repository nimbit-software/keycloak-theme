<#macro kw>
  <div class="flex justify-center">
    <img src="${url.resourcesPath}/img/nimbit.png"  width="150" > 
  </div>
  <div>
    <div class="font-bold text-left text-3xl">
         <h1> ${msg("loginAccountTitle")}</h1>
    </div>
        <div class="${properties.nbSubHeader!}"> 
            ${msg("nbLoginNewUser")} <a class="text-primary-500" href='${msg("nbURLCreateAccount")}'>${msg("nbLoginCreateAccount")}</a>
        </div>  
  </div>
   
  
  
</#macro>
