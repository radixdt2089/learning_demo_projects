// console.log('hello from main');
//  document.getElementById('content');
var mainElement = document.getElementById('myId');
console.log(mainElement);
var mycontent = ["<table>","<thead>","<tr>","<th style=\"text-align:left\"><strong>Feature</strong></th>","<th style=\"text-align:center\"><strong>SaaS</strong></th>","<th style=\"text-align:right\"><strong>PaaS</strong></th>","<th style=\"text-align:right\"><strong>IaaS</strong></th>","</tr>","</thead>","<tbody>","<tr>","<td style=\"text-align:left\"><strong>Resources</strong></td>","<td style=\"text-align:center\">Email, virtual desktop, CRM, Productivity tools, cloud-based storage</td>","<td style=\"text-align:right\">Development tools, databases, web servers, execution runtime</td>","<td style=\"text-align:right\">Network components, data storage, servers, virtual machines, load balancers</td>","</tr>","<tr>","<td style=\"text-align:left\"><strong>End-User</strong></td>","<td style=\"text-align:center\">Business people, general customers</td>","<td style=\"text-align:right\">Operational people, QA, developers</td>","<td style=\"text-align:right\">IT administrators</td>","</tr>","<tr>","<td style=\"text-align:left\"><strong>Control</strong></td>","<td style=\"text-align:center\">Application configuration</td>","<td style=\"text-align:right\">Application configuration, application server</td>","<td style=\"text-align:right\">Operating system, application configuration, application server, security network</td>","</tr>","<tr>","<td style=\"text-align:left\"><strong>Examples</strong></td>","<td style=\"text-align:center\">Dropbox, Google Workspace, Salesforce, Microsoft Office 365, Cisco WebEx</td>","<td style=\"text-align:right\">SAP Cloud, AWS Lambda, AWS Elastic Beanstalk, Oracle Cloud Platform, Heroku</td>","<td style=\"text-align:right\">AWS, Google Cloud, Microsoft Azure, DigitalOcean, Linode</td>","</tr>","</tbody>","</table>"]

function bindData(position , el){
  mainElement.insertAdjacentHTML(position , el)
}
bindData('afterend' , mycontent);

  // bind: function (el, binding) {    
  //   var indexNumber = 0;
  //   if (binding.value.length < 3) {
  //     for (var i = 0; i < binding.value.length; i++) {
  //       var value = binding.value[i];
  //       if (value !== "")
  //       el.insertAdjacentHTML('beforeend', value);
  //     }
  //     //var actualUrl = ''
  //     //if (typeof binding.value === "string")
  //     //    actualUrl = binding.value;
  //     //else {
  //     //    actualUrl = binding.value ? binding.value.url : '';
  //     //    if (actualUrl)
  //     //        el.src = actualUrl.replace(uri, 'https://images.rxweb.io/').replace('https://my-strapi-app-images-upload.s3.ap-south-1.amazonaws.com/', 'https://images.rxweb.io/');
  //     //}
  //   } else {
  //     let observer = new IntersectionObserver(function (entries) {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           observer.unobserve(el);
  //           var length = binding.value.length < 3 ? binding.value.length : 3;
  //           for (var i = 0; i < length; i++) {
  //             var value = binding.value[i];
  //             var content = {};
  //             if (value === "<ol>" || value === "<ul>" || value === "<blockquote>"|| value === "<table>" || value === "<details>") {
  //               content = getListHtml(binding.value, i ,(value === "<table>" || value === "<details>"));
  //               value = content.html;
  //             }
  //             if (value !== "")
  //             el.insertAdjacentHTML('beforeend', value);
  //             indexNumber = content.currentIndex || length;
  //             if (content.currentIndex)
  //               break;
  //           }
  //           if (binding.value.length > 3) {
  //             setTimeout(() => {
  //               var divElement = document.createElement("div");
  //               el.after(divElement);
  //               observer = new IntersectionObserver(function (elementEntries) {
  //                 elementEntries.forEach(entryObject => {
  //                   if (entryObject.isIntersecting) {
                  
  //                     for (var i = indexNumber; i < binding.value.length; i++) {
  //                       var value = binding.value[i];
  //                       var content = {};
  //                       if (value === "<ol>" || value === "<ul>" || value === "<blockquote>"|| value === "<table>" || value === "<details>") {
  //                         content = getListHtml(binding.value, i,(value === "<table>" || value === "<details>"));
  //                         value = content.html;
  //                       }
  //                       if (value !== "")
  //                       el.insertAdjacentHTML('beforeend', value);
  //                       indexNumber = content.currentIndex || length;
  //                       if (content.currentIndex)
  //                         i = content.currentIndex;
  //                     }
  //                     observer.unobserve(divElement);
  //                   }
  //                 });
  //               });
  //               observer.observe(divElement);
  //             }, 100)

  //           }
  //         }
  //       });
  //     }, {});
  //     observer.observe(el);
  //   }
  // }



// function getListHtml(values, currentIndex,isSkipListClose) {
//   var html = '';
//   for (var i = currentIndex; i < values.length; i++) {
//     html += values[i];
//     currentIndex = i;
//     if ((!isSkipListClose && values[i] === "</ol>" || values[i] === "</ul>" || values[i] === "</blockquote>") || (isSkipListClose && (values[i] === "</table>" || values[i] === "</details>")))
//       break;
//   }
//   return { html: html, currentIndex: currentIndex +1}
// }