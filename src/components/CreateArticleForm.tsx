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
        <div>
          <label htmlFor="title">Titre :</label>
          <Field type="text" id="title" name="title" />
          <ErrorMessage name="title" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="content">Contenu :</label>
          <Field as="textarea" id="content" name="content" />
          <ErrorMessage name="content" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="image">Lien de l'image :</label>
          <Field type="text" id="image" name="image" />
          <ErrorMessage name="image" component="div" className="error" />
        </div>

        <button type="submit">Enregistrer</button>
      </Form>
    </Formik>
  );
};

export default ArticleForm;
