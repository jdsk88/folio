// import React, { useState, useEffect, useMemo } from 'react'
// import { toast } from 'react-toastify'

// import Container from 'react-bootstrap/Container'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Column } from 'react-table'
// import Modal from 'react-bootstrap/Modal'
// import { Form } from 'react-bootstrap'

// import Headline from 'components/Headline'
// import Table from 'components/Table'
// import Button from 'components/Button'
// import Section from 'components/Section'
// import NewEmailTemplate from './NewEmailTemplateModal'
// import { EmailTemplateModal } from './EmailTemplateModal'

// import { getToken } from 'utils/auth'

// export const EmailTemplateUpdating = () => {
//   const API = 'https://apistagediy.splendid-research.com'
//   const token: any = getToken()
//   const ac = new AbortController()
//   const [formOptions, setFormOptions] = useState<any>([])
//   const [show, setShow] = useState<any>(false)
//   const [showNewTemplate, setShowNewTemplate] = useState(false)
//   const [reload, setReload] = useState(false)
//   const [emailData, setEmailData] = useState<any>({
//     emailTemplateId: '',
//     language: '',
//     title: '',
//     preHeader: '',
//     type: '',
//     html: '',
//   })

//   useEffect(() => {
//     fetch(${API}/admin/emailTemplates, {
//       headers: {
//         Authorization: Bearer ${token},
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setFormOptions(data)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//     return () => ac.abort()
//   }, [reload])

//   const handleClose = () => {
//     setShow(false)
//     setShowNewTemplate(false)
//   }

//   const handleClick = async (array: any) => {
//     handleShow()
//     handleModal(array)
//   }

//   const handleModal = (array: any) => {
//     setEmailData({
//       emailTemplateId: array.emailTemplateId,
//       language: array.language,
//       title: array.title,
//       preHeader: array.preHeader,
//       type: array.type,
//       html: array.html,
//     })
//   }
//   const handleShowNewTemplate = () => {
//     setShowNewTemplate(true)
//   }

//   const handleChange = (e: any) => {
//     e.preventDefault()
//     const { name, value } = e.target
//     setEmailData((prev: any) => {
//       return {
//         ...prev,
//         [name]: value,
//       }
//     })
//   }
//   const handleShow = () => setShow(true)
//   console.log(emailData)
//   const handleSave = () => {
//     const dataToChange = {
//       emailTemplateId: emailData.emailTemplateId,
//       language: emailData.language,
//       title: emailData.title,
//       preHeader: emailData.preHeader,
//       type: emailData.type,
//       html: emailData.html,
//     }
//     fetch(${API}/admin/emailTemplate, {
//       method: 'PUT',
//       headers: {
//         Authorization: Bearer ${token},
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(dataToChange),
//     })
//       .then((resp) => {
//         console.log(resp)
//         setReload((prev) => !prev)
//         handleClose()
//         if (resp.status !== 200) {
//           toast.error(Something went wrong! Error ${resp.status}.)
//         } else {
//           toast.success('Your changes have been sent to server')
//         }
//       })
//       .catch((err) => {
//         toast.error(err)
//       })
//   }

//   const columns = useMemo<Column[]>(
//     () => [
//       {
//         Header: 'none',
//         columns: [
//           {
//             Header: ' ',
//             Cell: (props: any) => (
//               <>
//                 <Button variant="link" size="sm" onClick={() => handleClick(props.row.original)}>
//                   <FontAwesomeIcon icon="edit" />
//                 </Button>
//               </>
//             ),
//           },
//           {
//             Header: 'ID',
//             accessor: 'emailTemplateId',
//           },
//           {
//             Header: 'Template type',
//             accessor: 'type',
//           },
//           {
//             Header: 'Language',
//             accessor: 'language',
//           },
//         ],
//       },
//     ],
//     [],
//   )

//   return (
//     <Container>
//       <Headline spacing="16">Email template updating</Headline>
//       <Button variant="primary" size="lg" block type="submit" className="mb-2 col-2" onClick={handleShowNewTemplate}>
//         New template
//       </Button>
//       <Section variant="border">
//         <NewEmailTemplate showNew={showNewTemplate} onHide={handleClose} />
//         {emailData && (
//           <EmailTemplateModal
//             show={show}
//             handleClose={handleClose}
//             emailData={emailData}
//             handleChange={handleChange}
//             handleSave={handleSave}
//           />
//         )}
//         <Table
//           name="emailTemplateUpdating"
//           isHorizontalScroll={false}
//           columns={columns}
//           data={formOptions ? formOptions : []}
//           isPageSize={false}
//           isPagePagination={true}
//           initialState={{
//             pageSize: 6,
//             sortBy: [
//               {
//                 id: 'emailTemplateId',
//               },
//             ],
//           }}
//         />
//       </Section>
//     </Container>
//   )
// }
// export default EmailTemplateUpdating

// Ewelina wysłał(a) Dzisiaj o 02:41
// import React, { useState, useEffect, useMemo } from 'react'
// import Modal from 'react-bootstrap/Modal'
// import { Form } from 'react-bootstrap'
// import Button from 'components/Button'
// export const EmailTemplateModal = ({ show, handleClose, emailData, handleChange, handleSave }: any) => {
//   return (
//     <Modal show={show} onHide={handleClose} dialogClassName="modal-150w" size="lg">
//       <Modal.Header closeButton>
//         <Modal.Title>{emailData && emailData.type + ' ' + emailData.language.toUpperCase()}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Title</Form.Label>
//             <Form.Control className="col-12" name="title" type="text" value={emailData.title} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Pre-header</Form.Label>
//             <Form.Control
//               className="col-12"
//               name="preHeader"
//               type="text"
//               value={emailData.preHeader}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group controlId="exampleForm.ControlSelect1">
//             <Form.Label>HTML</Form.Label>
//             <Form.Control
//               className="col-12"
//               name="html"
//               as="textarea"
//               value={emailData.html}
//               onChange={handleChange}
//               style={{ minHeight: '90vh' }}
//             />
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleSave}>
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   )
// }