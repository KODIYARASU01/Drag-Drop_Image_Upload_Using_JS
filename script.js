const dropArea=document.querySelector('.drop-area');
const inputBox=document.getElementById('input-file');
const imgEl=document.querySelector('.img-view');


inputBox.addEventListener("change",uploadImage)


function uploadImage(){
  let imglink=URL.createObjectURL(inputBox.files[0]);
  imgEl.style.backgroundImage=`url(${imglink})`;
  imgEl.textContent='';
  imgEl.style.border=0;
}
dropArea.addEventListener('dragover',(e)=>{
  e.preventDefault();

})
dropArea.addEventListener('drop',(e)=>{
  e.preventDefault();
  inputBox.files=e.dataTransfer.files;
  uploadImage();
})