import './styles'

// modal
  /*=============== SHOW MODAL ===============*/
  const showModal = (openButton: string, modalContent: string) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent)
    
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            modalContainer.classList.add('show-modal')
        })
    }
  }
  showModal('open-modal','modal-container')
  
  /*=============== CLOSE MODAL ===============*/
  const closeBtn = document.querySelectorAll('.close-modal')
  
  function closeModal(){
    const modalContainer = document.getElementById('modal-container')
    modalContainer?.classList.remove('show-modal')
  }
  closeBtn.forEach(c => c.addEventListener('click', closeModal))
  //

export function Modal() {
    return(
        <>
                            <section className="modal container">
            <button className="modal__button" id="open-modal">
                Open Modal
            </button>

            <div className="modal__container" id="modal-container">
                <div className="modal__content">
                    <div className="modal__close close-modal" title="Close">
                        <i className='bx bx-x'></i>
                    </div>

                    <img src={'https://raw.githubusercontent.com/bedimcode/responsive-popup-modal/main/assets/img/star-trophy.png'} alt="" className="modal__img"/>

                    <h1 className="modal__title">Good Job!</h1>
                    <p className="modal__description">Click the button to close</p>

                    <button className="modal__button modal__button-width">
                        View status
                    </button>

                    <button className="modal__button-link close-modal">
                        Close
                    </button>
                </div>
            </div>
        </section>
        </>
    );
}