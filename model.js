// function EditModal({ isOpen, onClose, formData, handleChange, handleSubmit }) {
//     const isEdit = formData !== null; // Check if formData is not null
  
//     return (
//       <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" style={{ display: isOpen ? 'block' : 'none' }}>
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">{isEdit ? 'Edit User' : 'Add User'}</h5>
//               <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={handleSubmit}>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default EditModal;
  