module.exports = (sequelize, DataTypes) => {
    const ForexRecon = sequelize.define(
        "forex_recon",
        {
            transaction_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            capture_timestamp: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            release_timestamp: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            sender_country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sender_currency: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            sender_amount: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            receiver_country: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            receiver_currency: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            receiver_amount: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            cover_number: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            used_exchange_rate: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            gateway_used: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            gateway_percentage: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            gateway_charges: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            platform_charges: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sender_country_payment_received_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sender_country_gateway_settlement_indicator: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sender_correspondent_bank_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sender_correspondent_bank_bic_code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sender_correspondent_bank_sort_code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            receiver_correspondent_bank_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            receiver_correspondent_bank_bic_code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            receiver_correspondent_bank_sort_code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            final_bank_recipient_full_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            final_recipient_bank_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            final_recipient_bank_branch_code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            final_recipient_bank_bic_code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            final_recipient_bank_account_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            final_bank_money_released_indicator: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            to_country_bulk_money_released_indicator: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            To_country_bulk_money_release_transaction_number: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );

    return ForexRecon;
};
