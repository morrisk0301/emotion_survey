module.exports = {
    db_url: 'mongodb://localhost:27017/survey',
    db_schemas: [
        {file:'./user_schema', collection:'user', schemaName:'UserSchema', modelName:'UserModel'},
        {file:'./survey_schema', collection:'survey', schemaName:'SurveySchema', modelName:'SurveyModel'},
    ],
};