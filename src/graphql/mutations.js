/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCad = /* GraphQL */ `
  mutation CreateCad(
    $input: CreateCadInput!
    $condition: ModelCadConditionInput
  ) {
    createCad(input: $input, condition: $condition) {
      id
      name
      thumbnail
      cad_file
      cad_size
      cad_thumbnail
      fem_file
      fem_thumbnail
      fem_size
      element_type
      num_elements
      num_nodes
      matrix_file
      matrix_thumbnail
      matrix_size
      description
      author
      contact
      createdAt
      updatedAt
    }
  }
`;
export const updateCad = /* GraphQL */ `
  mutation UpdateCad(
    $input: UpdateCadInput!
    $condition: ModelCadConditionInput
  ) {
    updateCad(input: $input, condition: $condition) {
      id
      name
      thumbnail
      cad_file
      cad_size
      cad_thumbnail
      fem_file
      fem_thumbnail
      fem_size
      element_type
      num_elements
      num_nodes
      matrix_file
      matrix_thumbnail
      matrix_size
      description
      author
      contact
      createdAt
      updatedAt
    }
  }
`;
export const deleteCad = /* GraphQL */ `
  mutation DeleteCad(
    $input: DeleteCadInput!
    $condition: ModelCadConditionInput
  ) {
    deleteCad(input: $input, condition: $condition) {
      id
      name
      thumbnail
      cad_file
      cad_size
      cad_thumbnail
      fem_file
      fem_thumbnail
      fem_size
      element_type
      num_elements
      num_nodes
      matrix_file
      matrix_thumbnail
      matrix_size
      description
      author
      contact
      createdAt
      updatedAt
    }
  }
`;
