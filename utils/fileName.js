const file = [
    "s6_anger_F_a4.wav", "s6_anger_F_a10.wav", "s6_anger_F_a13.wav", "s6_anger_F_a17.wav", "s6_anger_F_a19.wav",
    "s7_anger_M_a3.wav", "s7_anger_M_a4.wav", "s7_anger_M_a16.wav", "s7_anger_M_a17.wav", "s7_anger_M_a18.wav",
    "s6_excitement_F_e2.wav", "s6_excitement_F_e8.wav", "s6_excitement_F_e9.wav", "s6_excitement_F_e14.wav", "s6_excitement_F_e20.wav",
    "s7_excitement_M_e6.wav", "s7_excitement_M_e7.wav", "s7_excitement_M_e16.wav", "s7_excitement_M_e21.wav", "s7_excitement_M_e24.wav",
    "s13_fear_F_f9.wav", "s13_fear_F_f13.wav", "s13_fear_F_f19.wav", "s13_fear_F_f20.wav", "s14_fear_M_f8.wav",
    "s14_fear_M_f9.wav", "s14_fear_M_f20.wav", "s17_fear_M_f1.wav", "s18_fear_F_f1.wav", "s19_fear_M_f12.wav",
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