import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../logic/redux/reduxhooks';
import { selectHomePageController } from '../logic/redux/controllers';
import { addArticle } from '../logic/redux/general';

// Schéma de validation Yup
const articleSchema = Yup.object().shape({
  title: Yup.string().required('Le titre est requis'),
  content: Yup.string().required('Le contenu est requis'),
  image: Yup.string().url('Lien de l\'image invalide')
});

const ArticleForm = ({onSubmitProp,initialValuesProp} : {onSubmitProp:any,initialValuesProp:any}) => {
  const homePageController = useAppSelector(selectHomePageController)
  const dispatch = useAppDispatch()

  const handleSubmit =  async (values : any, { setSubmitting } : any) => {
    // Effectuer les actions d'enregistrement de l'article ici
    console.log(values);
    setSubmitting(false);

    onSubmitProp(values);


  };

  return (
    <Formik
      initialValues={ initialValuesProp != null ? initialValuesProp: {
        title: '',
        content: '',
        image: 'https://images.pexels.com/photos/15360894/pexels-photo-15360894/free-photo-of-mer-plage-sable-femme.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
      }}
      validationSchema={articleSchema}
      onSubmit={handleSubmit}
    >
      <Form>

      {/* <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div> */}



        
        <div>
          <label className="form-label" htmlFor="title">Titre :</label>
          <Field  className="form-control" type="text" id="title" name="title" />
          <ErrorMessage name="title" component="div" className="alert alert-danger" />
        </div>

        <div>
          <label  className="form-label" htmlFor="content">Contenu :</label>
          <Field className="form-control" as="textarea" id="content" name="content" />
          <ErrorMessage name="content" component="div" className="alert alert-danger" />
        </div>

        <div>
          <label className="form-label" htmlFor="image">Lien de l'image :</label>
          <Field className="form-control" type="text" id="image" name="image" />
          <ErrorMessage name="image" component="div" className="alert alert-danger" />
        </div>

        <button className='btn btn-primary mt-4' type="submit">Enregistrer</button>
      </Form>
    </Formik>
  );
};

export default ArticleForm;
