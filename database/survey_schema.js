const autoIncrement = require('mongoose-auto-increment-fix');
let Schema = {};

Schema.createSchema = function(mongoose) {

    let SurveySchema = mongoose.Schema({
        sv_num: {type: Number, required: true}
        , sv_file_name: {type: String, required: true}
        , sv_user_id: {type: Number, required: true}
        , sv_valence: {type: Number, required: true}
        , sv_arousal: {type: Number, required: true}
        , sv_emotion: {type: String, required: true}
        , sv_question: {type: Object, required: true}
        , sv_detail: {type: String}
        , created_at: {type: Date, 'default': Date.now}
    });

    console.log('SurveySchema 정의함.');

    SurveySchema.plugin(autoIncrement.plugin, {model: 'SurveyModel', field: 'sv_id'});

    return SurveySchema;
};

module.exports = Schema;

