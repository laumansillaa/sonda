import Swal from 'sweetalert2'
export const SweetAlert = ({title, text, icon}) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon
    })
}

// export const SweetAlertConfirm = ({}) => {
//     return Swal

// }


// Swal.fire({
//     title: 'Do you want to save the changes?',
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: 'Save',
//     denyButtonText: `Don't save`,
//   }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//       Swal.fire('Saved!', '', 'success')
//     } else if (result.isDenied) {
//       Swal.fire('Changes are not saved', '', 'info')
//     }
//   })