
document.getElementById('deposetbtn').addEventListener('click',function(){
    let deposetid = document.getElementById('diposetFiels');
   let deposetnewvalue = deposetid.value;

   //crrent diposet===================
  let crrentdepoid = document.getElementById('depoamou');
  let crrentdepovalue = crrentdepoid.innerText;

      // jog kora holo =====================
   const totaldepo = parseFloat(crrentdepovalue) + parseFloat(deposetnewvalue);

  crrentdepoid.innerText = totaldepo;
  //clear input====================
  deposetid.value = '';
  // total blence get========================
 let totalblenceid= document.getElementById('totalamount');
 let totalblenceAmount = totalblenceid.innerText;
 const totalblencejogholo = parseFloat(totalblenceAmount) + parseFloat(deposetnewvalue);

 totalblenceid.innerText = totalblencejogholo;//total  dive pathano holo
  })

  ////================ widrow section code=================================================
  document.getElementById('widrowtbtn').addEventListener('click',function(){
    let widrowfild = document.getElementById('widrowField');
    let widrowValue = widrowfild.value;
    //get widrow text amount============
    let widrowid = document.getElementById('witdrowamo');
    let widrowtext = widrowid.innerText;
    // widrow jog kora===============
    let totalwidrow = parseFloat(widrowtext) + parseFloat(widrowValue);
    console.log(totalwidrow);
    // value widrow text e pathano===========
    widrowid.innerText = totalwidrow;

    /// clear input=============
    widrowfild.value = '';

    // total blence get========================
    let totalblenceid= document.getElementById('totalamount');
    let totalblenceAmount = totalblenceid.innerText;
    const totalblencebiyog = parseFloat(totalblenceAmount) - parseFloat(widrowValue);

    totalblenceid.innerText = totalblencebiyog;//total  dive pathano holo
})