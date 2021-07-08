/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCad = /* GraphQL */ `
  query GetCad($id: ID!) {
    getCad(id: $id) {
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
export const listCads = /* GraphQL */ `
  query ListCads(
    $filter: ModelCadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
