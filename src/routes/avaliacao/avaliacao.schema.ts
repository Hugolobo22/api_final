const CreateAvaliacaoSchema = {
    email: {
      notEmpty: {
        errorMessage: "Campo de email não pode ser vazio",
      },
    },
    nota: {
      notEmpty: {
        errorMessage: "Campo de nota não pode ser vazio",
      },
    },
    comentario: {
      notEmpty: {
        errorMessage: "Campo de comentário não pode ser vazio",
      },
      isLength: {
        options: {
          min: 1,
          max: 255,
        },
        errorMessage: "O comentário tem que ter entre 1 e 255 caracteres",
      },
    },
  };
  
  const UpdateAvaliacaoSchema = {
    email: {
      notEmpty: {
        errorMessage: "Campo de email não pode ser vazio",
      },
    },
    nota: {
      notEmpty: {
        errorMessage: "Campo de nota não pode ser vazio",
      },
    },
    comentario: {
      notEmpty: {
        errorMessage: "Campo de comentário não pode ser vazio",
      },
      isLength: {
        options: {
          min: 1,
          max: 255,
        },
        errorMessage: "O comentário tem que ter entre 1 e 255 caracteres",
      },
    },
  }
  
  const PatchAvaliacaoSchema = {
    comentario: {
      isLength: {
        options: {
          min: 1,
          max: 255,
        },
        errorMessage: "O comentário tem que ter entre 1 e 255 caracteres",
      },
    },
  }
  
  export { CreateAvaliacaoSchema, UpdateAvaliacaoSchema, PatchAvaliacaoSchema }; 