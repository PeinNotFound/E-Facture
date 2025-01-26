import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
        fontSize: 12,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    logo: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        color: '#1D4ED8',
    },
    section: {
        marginBottom: 10,
    },
    text: {
        marginBottom: 10,
        color: '#333333',
    },
    bold: {
        fontWeight: 'bold',
    },
    address: {
        marginTop: 4,
        color: '#666666',
    },
    divider: {
        marginVertical: 10,
        borderBottom: '1px solid #E5E7EB',
    },
    table: {
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        margin: 'auto',
        flexDirection: 'row',
    },
    tableCol: {
        width: '25%',
        borderStyle: 'solid',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        padding: 5,
    },
    tableCellHeader: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#555555',
    },
    tableCell: {
        fontSize: 10,
        color: '#333333',
    },
});

const InvoicePDF = ({ bill, user }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Image style={styles.logo} src="/images/2alx_white.png" />
                    <Text style={styles.title}>Alx Inc.</Text>
                    <Text style={styles.text}>Avenue Mohamed VI</Text>
                    <Text style={styles.text}>Guéliz, Marrakech</Text>
                </View>
                <View>
                    <Text style={styles.title}>Invoice #{bill.id}</Text>
                    <Text style={styles.address}>
                        Invoice Date: {new Date().toLocaleDateString()}
                    </Text>
                    <Text style={styles.address}>
                        Due Date: {new Date(bill.due_date).toLocaleDateString()}
                    </Text>
                </View>
            </View>

            {/* Bill To Section */}
            <View style={styles.section}>
                <Text style={[styles.bold, styles.text]}>Bill to:</Text>
                <Text style={styles.text}>{user.name}</Text>
                <Text style={styles.address}>{user.address}</Text>
            </View>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Invoice Details Table */}
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCellHeader}>Description</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCellHeader}>Qty</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCellHeader}>Bill Number</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCellHeader}>Amount</Text>
                    </View>
                </View>

                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{bill.bill_type} Bill</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>1</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{bill.id}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>${bill.total_amount_due}</Text>
                    </View>
                </View>
            </View>

            {/* Amounts Section */}
            <View style={styles.section}>
                <Text style={styles.text}>
                    <Text style={styles.bold}>Amount: </Text>
                    ${bill.amount}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.bold}>Previous Balance: </Text>
                    ${bill.previous_balance}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.bold}>Total Amount Due: </Text>
                    ${bill.total_amount_due}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.bold}>Payment Status: </Text>
                    {bill.payment_status}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.bold}>Billing Period: </Text>
                    {bill.billing_period_start} to {bill.billing_period_end}
                </Text>
            </View>

            {/* Thank You Note */}
            <View style={styles.section}>
                <Text style={styles.bold}>Thank you!</Text>
                <Text style={styles.text}>
                    If you have any questions concerning this invoice, please contact:
                </Text>
                <Text style={styles.text}>Email: example@site.com</Text>
                <Text style={styles.text}>Phone: +1 (062) 109-9222</Text>
            </View>
        </Page>
    </Document>
);

export default InvoicePDF;
