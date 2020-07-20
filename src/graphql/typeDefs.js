import * as path from "path";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";

const schemaPath = path.join(__dirname, "./*/*.graphql");
const typesArray = fileLoader(schemaPath);
const typesMerged = mergeTypes(typesArray);

export default typesMerged;
