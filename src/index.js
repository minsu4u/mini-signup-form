// TODO: 이 곳에 정답 코드를 작성해주세요.

const input = document.getElementsByTagName('input');
let msg = ''
let ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
let PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

// 텍스트 출력
function focusOut(e){
   const elm = e.target;
   const id = elm.getAttribute('id');
   const next = elm.nextElementSibling;
   elm.classList.add('border-red-600');

   //텍스트 유효성 검사
    // 해당 타겟에 빈문자열이 아니고, 텍스트가 있을때
     
    if(Boolean(elm.value)){
        switch(id){
            // id의 유효성
        case "id":
            if(ID_REGEX.test(elm.value)) return elm.classList.remove('border-red-600'), msg = '';  
            else return msg = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
        case "pw":
            return msg = "8~16자 영문 대 소문자, 숫자를 사용하세요." ;  
        case "pw-check":
            return msg = "비밀번호가 일치하지 않습니다." ;  
        default:
             return msg;
        }    
    }else{
        console.log('else');
        msg = "필수 정보입니다."
    }
    
}

window.onload = ()=>{
    document.getElementById('id').focus();
}


let focusEle = document.activeElement;

// 유효성 검사
// 대상 : id, pw, pwre, submit
// 이벤트 : 1) input focus out 2) submit 눌렀을 때
// 핸들러 : 1) 해당 input 유효성 검사 2) 전체 유효성 검사

// 1) 완료

Array.from(input).map(item=>{
    if(item.getAttribute('id') === 'submit') {
        console.log(item)
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            focusOut(e);
            
        })
    }else{
        item.addEventListener('focusout', (e)=>{
            focusOut(e);
            item.nextElementSibling.innerText = msg
        })
    }
})