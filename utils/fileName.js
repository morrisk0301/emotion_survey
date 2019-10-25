const file = [
    "s10_happiness_M_h8.wav", "s10_happiness_M_h12.wav", "s10_happiness_M_h13.wav", "s10_happiness_M_h16.wav", "s10_happiness_M_h20.wav",
    "s15_happiness_F_h6.wav", "s15_happiness_F_h11.wav", "s15_happiness_F_h15.wav", "s15_happiness_F_h16.wav", "s15_happiness_F_h20.wav",
    "s14_sadness_M_s9.wav", "s14_sadness_M_s13.wav", "s14_sadness_M_s16.wav", "s14_sadness_M_s17.wav", "s14_sadness_M_s18.wav",
    "s11_sadness_F_s6.wav", "s11_sadness_F_s8.wav", "s11_sadness_F_s10.wav", "s11_sadness_F_s17.wav", "s11_sadness_F_s20.wav",
    "s19_neutral_M_n8.wav", "s19_neutral_M_n10.wav", "s19_neutral_M_n12.wav", "s19_neutral_M_n15.wav", "s19_neutral_M_n19.wav",
    "s15_neutral_F_n4.wav", "s15_neutral_F_n8.wav", "s15_neutral_F_n10.wav", "s15_neutral_F_n11.wav", "s15_neutral_F_n14.wav",

    "s10_happiness_M_h8.wav", "s10_happiness_M_h12.wav", "s10_happiness_M_h13.wav", "s10_happiness_M_h16.wav", "s10_happiness_M_h20.wav",
    "s15_happiness_F_h6.wav", "s15_happiness_F_h11.wav", "s15_happiness_F_h15.wav", "s15_happiness_F_h16.wav", "s15_happiness_F_h20.wav",
    "s14_sadness_M_s9.wav", "s14_sadness_M_s13.wav", "s14_sadness_M_s16.wav", "s14_sadness_M_s17.wav", "s14_sadness_M_s18.wav",
    "s11_sadness_F_s6.wav", "s11_sadness_F_s8.wav", "s11_sadness_F_s10.wav", "s11_sadness_F_s17.wav", "s11_sadness_F_s20.wav",
    "s19_neutral_M_n8.wav", "s19_neutral_M_n10.wav", "s19_neutral_M_n12.wav", "s19_neutral_M_n15.wav", "s19_neutral_M_n19.wav",
    "s15_neutral_F_n4.wav", "s15_neutral_F_n8.wav", "s15_neutral_F_n10.wav", "s15_neutral_F_n11.wav", "s15_neutral_F_n14.wav",
];


function getFileName(seed) {
    return file[seed];
}

module.exports = getFileName;