export const pageStyle = `
    @page {
        size: 210mm 297mm;
    }

    @media print {
        .printSection{
            padding: 10px 20px;
            background-color: #282c34;
        }
        
        .printSection header {
            font-size: 1.2rem;
        }
        
        .printSection main img {
            width: 100px;
        }
        
        .printSection main h2 {
            font-size: 13px;
        }
        
        .printSection main ul {
            font-size: 10px;
            line-height: 14px;
            margin: 1rem 2rem;
            padding: 0.7rem;
        }
        
        .printSection main h4 {
            font-size: 10px;
            line-height: 14px;
            margin: 1rem 2rem;
            padding: 0.7rem;
        }
        
        .printSection main h2:nth-of-type(4) {
            padding-top: 2rem;
        }
        
        .printSection main li {
            margin: 6px 0 6px 1rem;
        }
        
        .printSection main h4 strong {
            margin: 9px 0;
        }
    }
`;
