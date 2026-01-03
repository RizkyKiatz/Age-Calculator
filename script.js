document.getElementById('Calculator').addEventListener('click', function(){
    const brithdateInput = document.getElementById('birthdate').value;
    const resultdiv = document.getElementById('result');

    if (brithdateInput){
        const today = new Date();
        const birthdate = new Date(brithdateInput);

        let age = today.getFullYear() - birthdate.getFullYear();
        let monthDiff = today.getMonth()-birthdate.getMonth();
        let dayDiff = today.getDate()-birthdate.getDay();

        if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)){
            age--;
        }
        resultdiv.textContent = `You are ${age} years ${-monthDiff} months old`;
    }else{
        resultdiv.textContent="masukkan tanggal lahir anda!!";
    }


});